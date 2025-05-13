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

    async searchCandidate(page = 1, size = 10, keyword = '') {
        const totalResult = await this.repository.getSearchTotalCount(keyword);
        const total = totalResult?.total ? parseInt(totalResult.total, 10) : 0;
        const data = await this.repository.searchCandidatesByNameAndJob(page, size, keyword);

        return {
            content: data.map(e => CandidateDto(e)),
            pageSize: size,
            total,
        };
    }
    async createCandidate(candidateForm) { 
        const infCandidate =  await this.repository.createCandidate(candidateForm);
        return infCandidate;
    }

}

export const CandidateService = new Service();