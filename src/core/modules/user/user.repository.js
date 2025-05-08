import { DataRepository } from 'packages/restBuilder/core/dataHandler/data.repository';

class Repository extends DataRepository {
    findByEmail(email) {
        return this.query()
            .innerJoin('roles', 'roles.id', 'users.role_id')
            .whereNull('users.deleted_at')
            .where('users.email', '=', email)
            .select(
                'users.id',
                'users.email',
                'users.password',
                { role: 'roles.name' },
                { name: 'users.name' },
                { avatar: 'users.avatar' },
                { phoneNumber: 'users.phone_number' },
                { address: 'users.address' },
                { active: 'users.active' },
                { birthday: 'users.birthday' },
                { createdAt: 'users.created_at' },
                { updatedAt: 'users.updated_at' },
                { deletedAt: 'users.deleted_at' },
            )
            .first();
    }

    findById(id) {
        return this.query()
            .innerJoin('roles', 'roles.id', 'users.role_id')
            .whereNull('users.deleted_at')
            .where('users.id', '=', id)
            .select(
                'users.id',
                'users.email',
                { name: 'users.name' },
                { role: 'roles.name' },
                { createdAt: 'users.created_at' },
                { updatedAt: 'users.updated_at' },
                { deletedAt: 'users.deleted_at' },
            );
    }

    findRoles(id) {
        return this.query()
            .innerJoin('roles', 'roles.id', 'users.role_id')
            .where('users.id', '=', id)
            .select('roles.name');
    }

}

export const UserRepository = new Repository('users');
