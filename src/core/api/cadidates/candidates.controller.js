import { CandidateService } from '../../modules/candidate/services/candidate.service';
import { ValidHttpResponse } from '../../../packages/handler/response/validHttp.response';
import { CreateCandidateDto } from '../../modules/candidate/dto/createCandidate.dto';
class Controller {
    constructor() {
        this.service = CandidateService;
    }

    createCandidate = async req => {
        const { desc_rate, userId } =req.body;
        await this.service.createCandidate(
            CreateCandidateDto(req.body),
            desc_rate,
            userId
        );
        return ValidHttpResponse.toOkResponse(
            MessageDto({ message: 'Candidate created' }),
        );
    };
}

export const CandidateController = new Controller();
