"use client";
import "./Social.css";
import React, { useEffect, useState } from "react";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { timeline } from "@/mocks/timelineMock";
import { TruncatedTextProps } from "@/types/timeline";
import Image from "next/image";

const TIMELINE_CONTENT_STYLE = { background: "#0f0715", color: "#fff" };
const TIMELINE_ARROW_STYLE = { borderRight: "7px solid #0f0715" };

const TimelineItem: React.FC<TruncatedTextProps> = ({ item, isExpanded, onExpand }) => {
    return (
        <VerticalTimelineElement key={`vertical-timeline-item-${item.key}`} visible={true} className="vertical-timeline-element--work" contentStyle={TIMELINE_CONTENT_STYLE} contentArrowStyle={TIMELINE_ARROW_STYLE} date={item.date} {...item.icon}>
            {item.title && (
                <div>
                    <h3 className="gradient-text vertical-timeline--title">{item.title}</h3>
                    {item.subtitle && <h4 className="gradient-text-inverse vertical-timeline--subtitle">{item.subtitle}</h4>}
                    <TruncatedText key={`truncated-text-${item.key}`} item={item} isExpanded={isExpanded} onExpand={onExpand} />
                </div>
            )}
        </VerticalTimelineElement>
    );
};

const Social: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleExpand = (id: string) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="timeline-container">
            <VerticalTimeline animate={true}>
                {timeline.map((item, index) => (
                    <TimelineItem key={item.key} item={item} isExpanded={expandedId === `truncate-id-${item.key}`} onExpand={() => handleExpand(`truncate-id-${item.key}`)} />
                ))}
            </VerticalTimeline>
        </div>
    );
};

const normalizeIconName = (name: string): string => {
    return name.replace(/\s+/g, "-").toLowerCase();
};

const TruncatedText: React.FC<TruncatedTextProps> = ({ item, isExpanded, onExpand }) => {
    const [icons, setIcons] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const { tools, desc, key } = item;

    useEffect(() => {
        if (tools) {
            const toolList = tools.split(",").map((tool) => tool.trim());
            const iconPromises = toolList.map(async (tool) => {
                const iconName = normalizeIconName(tool);
                const iconUrl = `/svg/${iconName}.svg`;
                try {
                    const response = await fetch(iconUrl);
                    if (response.ok) {
                        return iconUrl;
                    } else {
                        return null;
                    }
                } catch (error) {
                    return null;
                }
            });

            Promise.all(iconPromises).then((results) => {
                setIcons(results.filter((icon) => icon !== null) as string[]);
                setLoading(false);
            });
        }
    }, [tools]);

    const combinedText = `${desc ? desc + " " : ""}${tools || ""}`;

    return (
        <div key={`truncated-text-item${key}`} className="truncate-text">
            <p className="vertical-timeline--p">
                {isExpanded ? (
                    <div>
                        {desc && <p className="vertical-timeline--p">{desc}</p>}
                        {tools && (
                            <p className="vertical-timeline--p">
                                <h4>Herramientas:</h4>
                                {tools}
                            </p>
                        )}
                    </div>
                ) : (
                    `${combinedText.substring(0, 95)}...`
                )}
            </p>
            <button className="expand-collapse-button" onClick={onExpand}>
                {isExpanded ? "Ver menos" : "Ver más"}
            </button>
            <div className="icon-list">{loading ? tools?.split(",").map((_, index) => <Skeleton key={`skeleton-${_}-tool`} count={1} inline width={24} height={24} circle={true} className="skeleton-animation" />) : icons.map((icon, index) => <Image key={`svg-tool-icon-loaded-${icon}`} src={icon} alt={`Icon ${index}`} width={24} height={24} />)}</div>
        </div>
    );
};

export default Social;
