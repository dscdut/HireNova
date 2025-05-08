import { pick } from 'lodash';
import { JwtPayload } from 'core/modules/auth/dto/jwt-sign.dto';
import { UserDataService } from 'core/modules/user/services/userData.service';
import { joinUserRoles } from 'core/utils/userFilter';
import { BcryptService } from './bcrypt.service';
import { JwtService } from './jwt.service';
import { UserRepository } from '../../user/user.repository';
import { UnAuthorizedException } from '../../../../packages/httpException';
import { AuthRepository } from '../auth.repository';
import { Device } from 'core/common/enum/device.enum';
import dotenv from 'dotenv';
dotenv.config();

class Service {
    constructor() {
        this.userRepository = UserRepository;
        this.jwtService = JwtService;
        this.bcryptService = BcryptService;
        this.userDataService = UserDataService;
        this.refreshTokenRepository = AuthRepository;
    }

    async login(loginDto) {
    const user = await this.userRepository.findByEmail(loginDto.email);
    if (!user) {
        throw new UnAuthorizedException('Email is incorrect');
    }

    const usersArray = [user];
    const foundUser = joinUserRoles(usersArray);

    if (user && this.bcryptService.compare(loginDto.password, foundUser.password)) {
        const userInfo = this.#getUserInfo(foundUser);

        const accessToken = this.jwtService.accessTokenSign(JwtPayload(foundUser));
        const refreshToken = this.jwtService.refreshTokenSign(JwtPayload(foundUser));
        const expirationDays = parseInt(process.env.REFRESH_TOKEN_EXPIRATION_DAYS, 10);
        const expiredAt = new Date(Date.now() + expirationDays * 24 * 60 * 60 * 1000);

        await this.refreshTokenRepository.saveRefreshToken({
            userId: user.id,
            token: refreshToken,
            deviceInfo: Device.WEB,
            expiredAt
        });

        return {
            user: userInfo,
            accessToken,
            refreshToken,
        };
    }

    throw new UnAuthorizedException('Password is incorrect');
}

    #getUserInfo = user => pick(user, ['_id', 'email', 'name', 'roles']);
}

export const AuthService = new Service();
