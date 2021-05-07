
		// バリデーション処理
	export interface Validatable {
		value: string | number;
		required?: boolean;
		minLength?: number;
		maxLength?: number;
		min?: number;
		max?: number;
	}

	export function validate(validatableInput: Validatable) {
		let isValid = true;
		if (validatableInput.required) {
			// value の文字数が0でなければ
			isValid = isValid && validatableInput.value.toString().trim().length !== 0;
		}
		if (
			// value が minLength より大きく string なら
			validatableInput.minLength != null &&
			typeof validatableInput.value === 'string'
		) {
			// value が maxLength より大きければ
			isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
		}
		if (
			// value が minLength より大きく string なら
			validatableInput.maxLength != null &&
			typeof validatableInput.value === 'string'
		) {
			// value が maxLength より大きければ
			isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
		}
		if (
			// value が minLength より大きく string なら
			validatableInput.min != null &&
			typeof validatableInput.value === 'number'
		) {
			// value が maxLength より大きければ
			isValid = isValid && validatableInput.value >= validatableInput.min;
		}
		if (
			// value が min より大きく string なら
			validatableInput.max != null &&
			typeof validatableInput.value === 'number'
		) {
			// value が max より大きければ
			isValid = isValid && validatableInput.value <= validatableInput.max;
		}
		return isValid;
	}

