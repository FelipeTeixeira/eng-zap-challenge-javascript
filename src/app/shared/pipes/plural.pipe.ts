import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'plural'
})
export class PluralPipe implements PipeTransform {
    transform(qty: string | number, text: string): string {
        const isPlural = Number(qty) > 1;
        return `${qty} ${text}${isPlural ? 's' : ''}`;
    }
}
