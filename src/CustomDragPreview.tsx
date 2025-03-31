// @ts-nocheck
import React from "react";
import { DragLayerMonitorProps } from "@minoru/react-dnd-treeview";
import { CustomData } from "./types";
import { TypeIcon } from "./TypeIcon";
import styles from "./CustomDragPreview.module.css";

type Props = {
  monitorProps: DragLayerMonitorProps<CustomData>;
  parentRef: React.RefObject<HTMLDivElement>;
};

export const CustomDragPreview: React.FC<Props> = (props) => {
  console.log(props.monitorProps)
  const item = props.monitorProps.item;
  const parentRef = props.parentRef;

  const { x, y } = props.monitorProps.clientOffset;
  const parentRect = parentRef.current?.getBoundingClientRect();
  const parentX = parentRect.left;
  const parentY = parentRect.top;

  const out = x < parentX || x > parentX + parentRect.width || y < parentY || y > parentY + parentRect.height

  return (
    <div className={`${styles.root} ${out ? styles.out : ""}`}>
      <div className={styles.icon}>
        <TypeIcon
          droppable={item.droppable || false}
          fileType={item?.data?.fileType}
        />
      </div>
      <div className={styles.label}>{item.text}123</div>
    </div>
  );
};
