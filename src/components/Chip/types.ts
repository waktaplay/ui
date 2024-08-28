export interface IChipBaseProps {
    item: { label: string; value: string }
    onClick: (value: string) => void
    primary?: boolean
}

export interface IChipMediumProps extends IChipBaseProps {
    item: { icon: string; label: string; value: string; }
}


export interface IChipSmallProps extends IChipMediumProps {
    item: { icon: string; label: string; value: string; iconBgColor?: string }
}
