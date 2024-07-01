import { ISelectedTask } from "@/domain";

export interface FormTaskContext extends ISelectedTask {
	id: number | undefined;
	setTitle: (title: string) => void;
	setText: (text: string) => void;
	setId: (id?:number) => void;
	isValid: boolean;
}
