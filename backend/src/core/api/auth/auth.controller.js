import { AuthService } from '../../modules/auth/service/auth.service';
import { LoginDto, RegisterDto } from '../../modules/auth';
import { ValidHttpResponse } from '../../../packages/handler/response/validHttp.response';
import { UserService } from '../../modules/user/services/user.service';

class Controller {
    constructor() {
        this.service = AuthService;
        this.userService = UserService;
    }

    login = async req => {
        const data = await this.service.login(LoginDto(req.body));
        return ValidHttpResponse.toOkResponse(data);
    };
    register = async req => {
        const data = await this.userService.createOne(RegisterDto(req.body));
        return ValidHttpResponse.toOkResponse(data);
    };
}

export const AuthController = new Controller();
