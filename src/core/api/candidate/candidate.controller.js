import { ValidHttpResponse } from '../../../packages/handler/response/validHttp.response';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from 'core/common/constants/default-params.constant';
import { PaginationCandidateDto } from 'core/modules/candidate/dto/pagination-candidate.dto';
import { CandidateService } from 'core/modules/candidate/service/candidate.service';

class Controller {
    constructor() {
        this.service = CandidateService;
    }

    getCandidate = async req => {
        const page = req.query.page || DEFAULT_PAGE;
        const size = req.query.size || DEFAULT_PAGE_SIZE;
        const data = await this.service.getPaginationCandidate(
            page,
            size,
        );
        return ValidHttpResponse.toOkResponse(PaginationCandidateDto(data));
    };
}

export const CandidateController = new Controller();
