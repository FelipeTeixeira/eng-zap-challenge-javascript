export class RegrasUtils {
    temLatLon(lon: number, lat: number): boolean {
        return lon !== 0 && lat !== 0;
    }

    isRental(businessType: string): boolean {
        return businessType === 'RENTAL';
    }

    isSale(businessType: string): boolean {
        return businessType === 'SALE';
    }

    // ZAP
    valorMinimoAluguel(price: string): boolean {
        return Number(price) >= 3500;
    }

    valorMinimoVenda(price: string): boolean {
        return Number(price) >= 600000;
    }

    valorMinimoMetroQuadrado(price: string, usableAreas: number): boolean {
        return usableAreas > 0 && Number(price) / usableAreas > 3500;
    }

    // VIVA REAL
    valorMaximoAluguel(price: string, monthlyCondoFee: string): boolean {
        return Number(monthlyCondoFee) > 0 && Number(price) <= 4000;
    }

    valorMaximoVenda(price: string): boolean {
        return Number(price) <= 700000;
    }

    valorLimitCondomio(price: string, monthlyCondoFee: string): boolean {
        return Number(monthlyCondoFee) / Number(price) * 100 < 30;
    }
}
