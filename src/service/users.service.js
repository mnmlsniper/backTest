import test from '@playwright/test';
// todo перенести в настройки playwright
let apiUrl = 'http://localhost:3000';

export class UsersService {
	constructor(request) {
		this.request = request;
	}
	async post(user) {
		return test.step('POST /users', async () => {
			// Вынести в сетевой слой
			const response = await this.request.post(`${apiUrl}/users`, {
				data: user,
			});
			return response;
		});
	}
}
