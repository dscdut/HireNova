import { ValidHttpResponse } from '../../../packages/handler/response/validHttp.response';
import { JobPostingsService } from 'core/modules/job/service/job.service';
import { CreateJobPostingDto } from 'core/modules/job/dto/jobPosting.dto';
class Controller {
    constructor() {
        this.service = JobPostingsService;
    }

    findById = async req => {
        const data = await this.service.getJobDetailsById(req.params.id);
        return ValidHttpResponse.toOkResponse(data);
    }

    createOne = async req => {
        const data = await this.service.createOne(CreateJobPostingDto(req.body));
        return ValidHttpResponse.toCreatedResponse(data[0]);
    };
    getListJobOpening = async req => {
        const data = await this.service.getListJobOpening();
        return ValidHttpResponse.toOkResponse(data);
    };
    deleteJobById = async req => {
        const data = await this.service.deleteJobById(req.params.id);
        return ValidHttpResponse.toOkResponse(data);
    };
}

export const JobController = new Controller();
