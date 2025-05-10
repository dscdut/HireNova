import { ValidHttpResponse } from '../../../packages/handler/response/validHttp.response';
import { JobPostingsService } from 'core/modules/job/service/job.service';

class Controller {
    constructor() {
        this.service = JobPostingsService;
    }

    findById = async req => {
        const data = await this.service.getJobDetailsById(req.params.id);
        return ValidHttpResponse.toOkResponse(data);
    }
}

export const JobController = new Controller();
