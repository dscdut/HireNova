import { IndustryService } from 'core/modules/industry/service/industry.service';
import { ValidHttpResponse } from '../../../packages/handler/response/validHttp.response';

class Controller {
    constructor() {
        this.service = IndustryService;
    }

    getAll = async () => {
        const data = await this.service.getAll();
        return ValidHttpResponse.toOkResponse(data);
    };
}

export const IndustryController = new Controller();
