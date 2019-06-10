import { Observable, Subject } from 'rxjs';

export type CloseReason = 'MASK' | 'ESCAPE' | 'BUTTON' | 'EXPLICIT';

export class DynamicDialogRef {
	constructor() { }

	close(result: CloseReason = 'EXPLICIT') {
		this._onClose.next(result);
	}

	private readonly _onClose = new Subject<CloseReason>();
	onClose: Observable<CloseReason> = this._onClose.asObservable();
}
