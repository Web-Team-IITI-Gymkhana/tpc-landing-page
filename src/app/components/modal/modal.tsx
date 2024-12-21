import React from "react";
import styles from "./modal.module.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

export default function ModalUI(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const paragraphs = props.info.split(". ");
  const signature = props.signature.split(". ");

  const customClassNames = {
    wrapper: styles.wrapper,
    base: styles.base,
    backdrop: styles.backdrop,
    header: styles.header,
    body: styles.body,
    footer: styles.footer,
    closeButton: styles.closeButton,
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        radius="full"
        className="bg-gradient-to-tr from-[#0488D3] to-[#115398] text-white shadow-lg"
        onPress={onOpen}
      >
        Read More
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="outside"
        backdrop="opaque"
        classNames={customClassNames}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex flex-row gap-3">
                  <div className="modal mx-[4px]">{props.title}</div>
                </div>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-5 items-center para poppins">
                <div className="border-3 border-[#0488D3]">
                  <Image
                    src={props.image}
                    width={200}
                    height={300}
                    alt={props.title}
                  />
                </div>
                {paragraphs.map(
                  (para: string, index: React.Key | null | undefined) => (
                    <p key={index} className="text-justify">
                      {para}
                    </p>
                  ),
                )}
              </ModalBody>
              <ModalFooter className="   justify-start">
                <div className="  w-[100%] flex justify-between ">
                  <div>
                    {signature.map(
                      (sign: string, index: React.Key | null | undefined) => (
                        <p
                          key={index}
                          className=" mt-2 font-bold poppins text-lg font text-justify"
                        >
                          {sign}
                        </p>
                      ),
                    )}
                  </div>
                  <div className=" w-min flex items-end  ">
                    <Button
                      className=""
                      color="danger"
                      variant="light"
                      onPress={onClose}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
