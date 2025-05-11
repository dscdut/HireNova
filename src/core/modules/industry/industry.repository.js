import { DataRepository } from "packages/restBuilder/core/dataHandler";

class Repository extends DataRepository {
    getAll() {
        return this.query()
            .select('id', 'name')
            .whereNull('deleted_at');
    }
}

export const IndustryRepository = new Repository('industries');