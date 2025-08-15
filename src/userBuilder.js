import { faker } from '@faker-js/faker';

//todo доделать возможность настраивать генерацию с разными параметрами
export class UserBuilder {
	constructor() {
		this.username = null;
		this.email = null;
		this.password = null;
	}

	addUsername(options = {}) {
		// Генерируем username только из букв согласно требованиям API
		// Длина от 3 до 30 символов (по умолчанию)
		const minLength = options.min || 3;
		const maxLength = options.max || 30;
		const length = faker.number.int({ min: minLength, max: maxLength });
		this.username = faker.string.alpha({ length });
		return this;
	}

	addEmail(options = {}) {
		// Генерируем email с настраиваемыми параметрами
		this.email = faker.internet.email(options);
		return this;
	}

	addPassword(options = {}) {
		// Генерируем пароль минимум 8 символов согласно требованиям API
		// Длина от 8 до 16 символов (по умолчанию)
		const minLength = options.min || 8;
		const maxLength = options.max || 16;
		const length = faker.number.int({ min: minLength, max: maxLength });
		this.password = faker.internet.password({
			length,
		});
		return this;
	}

	generate() {
		// Проверяем, что все обязательные поля заполнены
		if (!this.username || !this.email || !this.password) {
			throw new Error(
				'Все поля должны быть заполнены перед генерацией пользователя',
			);
		}

		return {
			username: this.username,
			email: this.email,
			password: this.password,
		};
	}
}
