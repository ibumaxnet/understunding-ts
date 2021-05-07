
		// AutoBind Decorator
	export function autobind(
		_target: any, // _ をつけることで引数として受付けるが利用しないと宣言する
		_methodName: string, // _ をつけることで引数として受付けるが利用しないと宣言する
		descriptor: PropertyDescriptor,
	) {
		const originalMethod = descriptor.value;
		const adjDescriptor: PropertyDescriptor = {
			configurable: true,
			get() {
				const boundFn = originalMethod.bind(this);
				return boundFn;
			}
		}
		return adjDescriptor;
	}

