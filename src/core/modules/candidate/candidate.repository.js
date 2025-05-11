import { DataRepository } from 'packages/restBuilder/core/dataHandler';

class Repository extends DataRepository {
    getPaginationCandidate(page, size) {
        const offset = (page - 1) * size;
        return this.query()
            .innerJoin('job_postings', 'job_postings.id', 'candidates.job_posting_id') // Join với bảng job_postings
            .select(
                'candidates.id',
                'candidates.name',
                'candidates.summary',
                'candidates.experiences',
                'candidates.education',
                'candidates.certifications',
                'candidates.resume_file as resumeFile',
                'candidates.cover_latter as coverLetter',
                'candidates.status',
                'job_postings.title as jobPostingName',
                'candidates.created_at as createdAt',
                'candidates.updated_at as updatedAt'
            )
            .whereNull('candidates.deleted_at')
            .limit(size)
            .offset(offset);
    }

    getTotalCount() {
        return this.query()
            .whereNull('deleted_at')
            .count('id as total')
            .first()
            .then(result => {
            return result || { total: 0 };
        });
    }

    searchCandidatesByNameAndJob(page, size, keyword) {
        const offset = (page - 1) * size;
        return this.query()
            .innerJoin('job_postings', 'job_postings.id', 'candidates.job_posting_id') // Join với bảng job_postings
            .select(
                'candidates.id',
                'candidates.name',
                'candidates.summary',
                'candidates.experiences',
                'candidates.education',
                'candidates.certifications',
                'candidates.resume_file as resumeFile',
                'candidates.cover_latter as coverLetter',
                'candidates.status',
                'job_postings.title as jobPostingName',
                'candidates.created_at as createdAt',
                'candidates.updated_at as updatedAt'
            )
            .whereNull('candidates.deleted_at')
            .andWhere(function () {
                this.where('candidates.name', 'ilike', `%${keyword}%`) // Tìm kiếm theo tên ứng viên
                    .orWhere('job_postings.title', 'ilike', `%${keyword}%`); // Tìm kiếm theo tên công việc
            })
            .limit(size)
            .offset(offset);
    }
    
    getSearchTotalCount(keyword) {
        return this.query()
            .innerJoin('job_postings', 'job_postings.id', 'candidates.job_posting_id')
            .whereNull('candidates.deleted_at')
            .andWhere(function () {
                this.where('candidates.name', 'ilike', `%${keyword}%`)
                    .orWhere('job_postings.title', 'ilike', `%${keyword}%`);
            })
            .count('candidates.id as total')
            .first();
    }
}

export const CandidateRepository = new Repository('candidates');