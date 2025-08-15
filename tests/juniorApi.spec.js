import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

// todo перенести в настройки playwright
let apiUrl = 'http://localhost:3000';

/* Трейни автоматизатор
test('Пользователь может зарегистрироваться с помощью email', async ({
	request,
}) => {
	const response = await request.post(`${apiUrl}`, {
		data: {
			username: 'Lyubov',
			email: 'lyubov@example.ru',
			password: 'password123',
		},
	});

	//todo Завести дефект на статус 200, должен 201
	expect(response.status()).toBe(200);
});

*/
test('Пользователь может зарегистрироваться с помощью email', async ({
	request,
}) => {
	const user = {
		username: faker.internet.username(),
		email: faker.internet.email(),
		password: faker.internet.password(),
	};
	const response = await request.post(`${apiUrl}/users`, {
		data: user,
	});
	const body = await response.json();
	console.log(body);
	//todo Завести дефект на статус 200, должен 201
	expect(response.status()).toBe(200);
});
