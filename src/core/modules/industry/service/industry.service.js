import { IndustryRepository } from "../industry.repository";

class Service {
    constructor() {
        this.repository = IndustryRepository;
    }

    async getAll() {
        return await this.repository.getAll();
    }
}

export const IndustryService = new Service();