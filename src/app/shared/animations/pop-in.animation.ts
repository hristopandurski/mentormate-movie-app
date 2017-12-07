import { trigger, state, animate, style, transition, keyframes } from '@angular/animations';

export const popIn = () => {
    return trigger('popInAnimation', [
        transition(':enter', [
            animate('0.35s ease-in-out', keyframes([
                style({ transform: 'scale(0)' }),
                style({ transform: 'scale(0.3)' }),
                style({ transform: 'scale(0.5)' }),
                style({ transform: 'scale(0.7)' }),
                style({ transform: 'scale(1)' }),
                style({ transform: 'scale(1.2)' }),
                style({ transform: 'scale(1)' }),
            ]))
        ]),
    ]);
};
