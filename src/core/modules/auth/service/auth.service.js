import { pick } from 'lodash';
import { JwtPayload } from 'core/modules/auth/dto/jwt-sign.dto';
import { UserDataService } from 'core/modules/user/services/userData.service';
import { joinUserRoles } from 'core/utils/userFilter';
import { BcryptService } from './bcrypt.service';
import { JwtService } from './jwt.service';
import { UserRepository } from '../../user/user.repository';
import { UnAuthorizedException } from '../../../../packages/httpException';

class Service {
    constructor() {
        this.userRepository = UserRepository;
        this.jwtService = JwtService;
        this.bcryptService = BcryptService;
        this.userDataService = UserDataService;
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
            return {
                user: userInfo,
                accessToken: this.jwtService.accessTokenSign(JwtPayload(foundUser)),
                refreshToken: this.jwtService.refreshTokenSign(JwtPayload(foundUser)),
            };
        }

        throw new UnAuthorizedException('Password is incorrect');
    }

    #getUserInfo = user => pick(user, ['_id', 'email', 'name', 'roles']);
}

export const AuthService = new Service();
