enum positionModal {
  top,
  center,
  bottom,
  left,
  rigth
}

interface PropsModal{
  children: any;
  timeOut: number;
  isOpen: boolean;
  positionModal: positionModal
}

export default function Modal({ children, timeOut = null, isOpen = false, positionModal }: PropsModal) {

  

  return (
    <div className={'absolute w-screen h-screen bg-neutral-900 bg-opacity-70 flex justify-center items-center' + (isOpen == true?"ms-motion-scaleDownIn": "ms-motion-scaleDownOut")}>
      <div className="bg-white p-2
       rounded">{children}</div>
    </div>
  );
}
