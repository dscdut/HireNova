import { CandidateRepository } from "../candidate.repository";
import { CandidateDto } from "../dto/candidate.dto";

class Service {
    constructor() {
        this.repository = CandidateRepository;
    }

    async getPaginationCandidate(page = 1, pageSize = 10) {
            const totalResult = await this.repository.getTotalCount();
            const total = totalResult?.total ? parseInt(totalResult.total, 10) : 0; 
            const data = await this.repository.getPaginationCandidate(page, pageSize);
    
            return {
                content: data.map(e => CandidateDto(e)),
                pageSize,
                total,
            }
    }
}

export const CandidateService = new Service();