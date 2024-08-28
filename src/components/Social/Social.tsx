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
                    {item.tools.length > 0 && <IconsTimeline key={`icons-timeline-${item.key}`} item={item} />}
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
    const { tools, desc, key } = item;

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
        </div>
    );
};

const IconsTimeline: React.FC<TruncatedTextProps> = ({ item }) => {
    const [icons, setIcons] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const { tools } = item;
    
    // Lista de iconos a omitir
    const omitIcons = new Set<string>(["Tomcat", "WebSphere Liberty", "Angular Material", "SCSS", "Router", "Ajax", "Hooks", "Pruebas unitarias", "Spiratest" ]); // Agrega los nombres de los iconos que deseas omitir
    
    useEffect(() => {
        if (tools) {
            const toolList = tools.split(",").map((tool) => tool.trim());
    
            // Filtrar herramientas que no tienen icono asociado
            const filteredToolList = toolList.filter(tool => !omitIcons.has(tool));
    
            const iconPromises = filteredToolList.map(async (tool) => {
                const iconName = normalizeIconName(tool);
                const iconUrl = `/svg/${iconName}.svg`;
                try {
                    const response = await fetch(iconUrl);
                    if (response.ok) {
                        return iconUrl;
                    } else {
                        // Agrega la herramienta a la lista de omisiones si no se encuentra el icono
                        omitIcons.add(tool);
                        return null;
                    }
                } catch (error) {
                    // Agrega la herramienta a la lista de omisiones si hay un error
                    omitIcons.add(tool);
                    return null;
                }
            });
    
            Promise.all(iconPromises).then((results) => {
                setIcons(results.filter((icon) => icon !== null) as string[]);
                setLoading(false);
            });
        }
    }, [tools]);

    console.log(icons);
    

    return <div className="icon-list">{loading ? tools?.split(",")?.map((_) => <Skeleton key={`skeleton-${_}-tool`} count={1} inline width={24} height={24} circle={true} className="skeleton-animation" />) : icons.map((icon, index) => <Image key={`svg-tool-icon-loaded-${icon}`} src={icon} alt={`Icon${icon} ${index}`} width={24} height={24} />)}</div>;
};

export default Social;
