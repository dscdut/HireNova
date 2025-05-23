import { Role } from 'core/common/enum';
import { SpecificRoleGuard } from './specificRole.guard';
import { UnionRoleGuard } from './unionRole.guard';

export const hasAdminRole = new SpecificRoleGuard(Role.ADMIN);

export const hasSuperAdminRole = new SpecificRoleGuard(Role.SUPER_ADMIN);

export const hasAdminOrSuperAdminRole = new UnionRoleGuard(Role.ADMIN.name, Role.SUPER_ADMIN.name);

export const hasHRRole = new SpecificRoleGuard(Role.HR);
