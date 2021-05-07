import { Component } from '../components/base-components';
import { validate, Validatable } from '../util/validation'
import { autobind } from '../decorators/autobind';
import { projectState } from '../state/project-state';


		// フォームの表示と入力値の取得
	// ProjectInput Class
	export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
		titleInputElement: HTMLInputElement;
		descriptionInputElement: HTMLInputElement;
		mandayInputElement: HTMLInputElement;

	constructor() {
		super('project-input', 'app', true, 'user-input');

			this.titleInputElement = this.element.querySelector('#title', )! as HTMLInputElement;
			this.descriptionInputElement = this.element.querySelector('#description', )! as HTMLInputElement;
			this.mandayInputElement = this.element.querySelector('#manday', )! as HTMLInputElement;
			// console.log(this.descriptionInputElement);

			this.configure();
		}

		configure() {
			this.element.addEventListener('submit', this.submitHundler);
		}

		renderContent() {}

		@autobind
		private submitHundler(event: Event) {
			event.preventDefault();
			const userInput = this.gatherUserInput();
			console.log(userInput);
			if (Array.isArray(userInput)) {
				const [title, desc, manday] = userInput;
				projectState.addProject(title, desc, manday);
				// console.log(title, desc, manday);
				this.clearInputs();
			}
		}

		private gatherUserInput(): [string, string, number] | void {
			const enteredTitle = this.titleInputElement.value;
			const enteredDescription = this.descriptionInputElement.value;
			const enteredManday = this.mandayInputElement.value;

			const titleValidatable: Validatable = {
				value: enteredTitle,
				required: true,
			};
			const descriptionValidatable: Validatable = {
				value: enteredDescription,
				required: true,
				minLength: 5,
			};
			const mandayValidatable: Validatable = {
				value: +enteredManday,
				required: true,
				min: 1,
				max: 1000
			};

			if (
	    // enteredTitle.trim().length === 0 ||
	    // enteredDescription.trim().length === 0 ||
	    // enteredManday.trim().length === 0
	!validate(titleValidatable) ||
	!validate(descriptionValidatable) ||
	!validate(mandayValidatable)
			) {
				// console.log(titleValidatable, descriptionValidatable, mandayValidatable);
				alert('入力が正しくありません');
				return;
			} else {
				return [enteredTitle, enteredDescription, +enteredManday];
			}
		}

		private clearInputs() {
			this.titleInputElement.value = "";
			this.descriptionInputElement.value = "";
			this.mandayInputElement.value = "";
		}

	}

