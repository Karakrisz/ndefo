/** Menüpont, amely egy aloldalra mutat. */
export class NavLink {
  constructor(
    readonly label: string,
    /** Az aloldal útvonala, pl. `/utazasok`. */
    readonly to: string,
    /** Kiemelt, gombként megjelenő menüpont. */
    readonly isButton: boolean = false,
  ) {}
}
