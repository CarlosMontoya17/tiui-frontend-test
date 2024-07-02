import { BehavorSubject, Subscriptor } from "@/application";
import { ISimpleModal } from "@/domain/entities/SimpleModal.interface";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import CustomButton from "../../atoms/CustomButton/CustomButton";


export class SimpleModalComponent {
    private _state = new BehavorSubject<boolean>();

    get State(): BehavorSubject<boolean> {
        return this._state;
    }

    Provider: React.FC<ISimpleModal> = ({ title, text, cancel, accept }) => {
        const [ opened, setOpened ] = useState(false);

        const state$ = new Subscriptor((value: boolean) => {
            setOpened(value);
        });

        useEffect(() => {
            this._state.subscribe(state$);
            return () => {
                this._state.unsubscribe(state$);
            }
        }, []);


        const onClose = (_:{}, reason: "backdropClick" | "escapeKeyDown") => {
            if(reason && reason==="backdropClick") return;
            this._state.next(true);
        };

        const acceptClicked = () => {
            this._state.next(false);
            accept && accept();
        };

        const cancelClicked = () => {
            this._state.next(false);
            cancel && cancel();
        };

        return(
            <Dialog
			open={opened}
			onClose={onClose}
			disableEscapeKeyDown={false}
			className='custom-modal'
			aria-label='confirm action'
			fullWidth>
			<DialogTitle id="alert-tfdialog-title">
				{title}
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{text}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
                { cancel && <CustomButton color='error' size='medium' variant='outlined' text='Cancel' onClick={cancelClicked}/> }
				{ accept && <CustomButton color='success' size='medium' variant='contained' text='Accept' onClick={acceptClicked}/> }
			</DialogActions>
		</Dialog>
        );
    };

}