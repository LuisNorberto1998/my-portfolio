export interface DataTimeline {
    key: number;
    icon: IconTimeline;
    date: string;
    title: string;
    subtitle: string;
    desc: string[];
    tools: string;
}

export interface IconTimeline {
    icon: JSX.Element;
    iconStyle: {
        background: string;
        color: string;
    };
}

export interface TruncatedTextProps {
    item: DataTimeline
    isExpanded?: boolean;
    onExpand?: () => void;
}
