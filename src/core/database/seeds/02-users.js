/**
 * @param {import("knex")} knex
 */

const DEFAULT_PASSWORD = '$2b$10$4WxWKojNnKfDAicVsveh7.ogkWOBMV1cvRUSPCXwxA05NRX18F0QW'; // Mật khẩu mặc định đã hash

exports.seed = async knex => {
    // Xóa dữ liệu cũ trong bảng users
    await knex('users').del();

    // Thêm dữ liệu mẫu
    await knex('users').insert([
        {
            name: 'Super Admin',
            email: 'spadmin@gmail.com',
            password: DEFAULT_PASSWORD,
            active: true,
            birthday: '1980-01-01',
            phone_number: '0123456789',
            address: '123 Admin Street',
            role_id: 1,
            refresh_token: 'super_admin_refresh_token',
        },
        {
            name: 'Admin',
            email: 'admin@gmail.com',
            password: DEFAULT_PASSWORD,
            active: true,
            birthday: '1990-01-01',
            phone_number: '0987654321',
            address: '456 Admin Avenue',
            role_id: 2,
            refresh_token: 'admin_refresh_token',
        },
        {
            name: 'Pham Van A',
            email: 'vanA@gmail.com',
            password: DEFAULT_PASSWORD,
            active: true,
            birthday: '2000-01-01',
            phone_number: '0355521222',
            address: 'Da Nang',
            role_id: 3,
            refresh_token: 'A_refresh_token',
        },
        {
            name: 'Nguyen Van B',
            email: 'vanB@gmail.com',
            password: DEFAULT_PASSWORD,
            active: true,
            birthday: '2000-01-01',
            phone_number: '0355521232',
            address: 'Da Nang',
            role_id: 3,
            refresh_token: 'B_refresh_token',
        },
        {
            name: 'Tram Van C',
            email: 'vanC@gmail.com',
            password: DEFAULT_PASSWORD,
            active: true,
            birthday: '2000-01-01',
            phone_number: '0355521234',
            address: 'Da Nang',
            role_id: 3,
            refresh_token: 'C_refresh_token',
        },
    ]);
};
