import { DataRepository } from 'packages/restBuilder/core/dataHandler/data.repository';

class RefreshTokenRepository extends DataRepository {
    saveRefreshToken({ userId, token, deviceInfo, expiredAt }) {
        return this.query().insert({
            user_id: userId,
            token,
            device_info: deviceInfo,
            expired_at: expiredAt,
        });
    }
}

export const AuthRepository = new RefreshTokenRepository('refresh_tokens');