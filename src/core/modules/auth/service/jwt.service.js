import { sign, decode, verify } from 'jsonwebtoken';
import { JWT_SECRET, ACCESS_TOKEN_EXPIRE_DAYS, REFRESH_TOKEN_EXPIRE_DAYS } from '../../../env';
import { logger } from '../../../../packages/logger';

class Jwt {
    secret = JWT_SECRET;
    accessTokenExpiresIn = ACCESS_TOKEN_EXPIRE_DAYS;
    refreshTokenExpiresIn = REFRESH_TOKEN_EXPIRE_DAYS;

    constructor() {
        logger.info(`[${Jwt.name}] is bundling`);
    }

    accessTokenSign(payload) {
        return sign(payload, this.secret, {
            expiresIn: this.accessTokenExpiresIn,
        });
    }
    
    refreshTokenSign(payload) {
        return sign(payload, this.secret, {
            expiresIn: this.refreshTokenExpiresIn,
        });
    }

    sign(payload, expiresIn) {
        return sign(payload, this.secret, {
            expiresIn,
        });
    }

    decode(token) {
        return decode(token);
    }

    verify(token) {
        return verify(token, this.secret);
    }
}

export const JwtService = new Jwt();
