import { ValidHttpResponse } from '../../../packages/handler/response/validHttp.response';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from 'core/common/constants/default-params.constant';
import { PaginationCandidateDto } from 'core/modules/candidate/dto/pagination-candidate.dto';
import { CandidateService } from 'core/modules/candidate/services/candidate.service';
import { CreateCandidateDto } from 'core/modules/candidate/dto';
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

    searchCandidate = async req => {
        const page = req.query.page || DEFAULT_PAGE;
        const size = req.query.size || DEFAULT_PAGE_SIZE;
        const keyword = req.query.keyword;
        const data = await this.service.searchCandidate(
            page,
            size,
            keyword,
        );
        return ValidHttpResponse.toOkResponse(PaginationCandidateDto(data));
    };
    createCandidate = async req => {
        const { desc_rate, userId } = req.body;
        // console.log('desc_rate', req.body);
        await this.service.createCandidate(
            CreateCandidateDto(req.body),
            desc_rate,
            userId
        );
    };
}

export const CandidateController = new Controller();
