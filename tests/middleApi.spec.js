import { test, expect } from '@playwright/test';
import { UserBuilder } from '../src/index';
import { UsersService } from '../src/service/index';

test('Пользователь может зарегистрироваться с помощью email', async ({
	request,
}) => {
	// спрятать в фикстуру или в отдельнчый слой
	const usersService = new UsersService(request);
	// Пример использования с настройками длины
	const user = new UserBuilder()
		.addEmail()
		.addPassword({ min: 10, max: 12 }) // Пароль от 10 до 12 символов
		.addUsername({ min: 5, max: 8 }) // Username от 5 до 8 символов
		.generate();

	const response = await usersService.post(user);

	//todo Завести дефект на статус 200, должен 201
	expect(response.status()).toBe(200);
});
