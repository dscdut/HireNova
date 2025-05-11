import { BcryptService } from 'core/modules/auth';
import { getTransaction } from 'core/database';
import { Optional } from '../../../utils';
import { NotFoundException, DuplicateException, BadRequestException } from '../../../../packages/httpException';
import { CandidateRepository } from '../candidate.repository';
class Service {
    constructor() {
        this.repository = CandidateRepository;
        this.bcryptService = BcryptService;
    }

     async createCandidate(candidateForm, descRate, userId) {
        const trx = await getTransaction();
        try {
            await this.repository.createCandidate(
                {
                    desc_rate: descRate,
                    form: candidateForm,
                    userId: userId,
                },
                trx,
            );
        } catch (error) {
            trx.rollback();
            logger.error(error.message);
            throw new InternalServerException();
        }
        trx.commit();
    }
}

export const CandidateService = new Service();
