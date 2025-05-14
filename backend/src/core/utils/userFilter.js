export const joinUserRoles = users => {
    if (!Array.isArray(users) || users.length === 0) {
        return null; 
    }
    const { role, ...rest } = users[0];
    const user = { ...rest, roles: [role] };

    for (let i = 1; i < users.length; i += 1) {
        user.roles.push(users[i].role);
    }
    return user;
};

export const joinUsersRoles = users => {
    const listUsers = [];
    users.forEach(user => {
        const foundUser = listUsers.find(u => u.id === user.id);
        if (!foundUser) {
            const { role, ...rest } = user;
            const obj = { ...rest, roles: [role] };
            listUsers.push(obj);
        } else {
            foundUser.roles.push(user.role);
        }
    });
    return listUsers;
};
