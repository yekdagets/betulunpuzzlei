import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ImageUploading, { ImageListType } from "react-images-uploading";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;
  const bugun = new Date();
  const fixedDate = new Date('2021-12-15');

  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [loading, setLoading] = useState(false);
  const maxNumber = 1;

  const onChange = (
    imageList: ImageListType,
  ) => {
    // data for submit
    setImages(imageList as never[]);
    if (imageList && imageList.length > 0) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
      setTimeout(() => {
        setLoading(false);
        modalAc();
      }, 14000);

    }
    
  };

  const modalAc = () => {
    if (bugun >= fixedDate) {
      setModal(!modal);
    } else {
      setModal2(!modal2);
    }
    
  };
  return (
    <div>
      {!loading && (
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{mainHero.title}</span>{" "}
              <span className={`block text-primary xl:inline`}>
                {mainHero.subtitle}
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {mainHero.description}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <ImageUploading
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <Button
                        className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        {mainHero.primaryAction.text}
                      </Button>
                      &nbsp;
                      <Button
                        className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                        onClick={onImageRemoveAll}
                      >
                        Yüklemeni buradan değiştirebilirsin!
                      </Button>
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image["data_url"]} alt="" width="100" />
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
              </div>
            </div>
          </div>
        </main>
      )}
      <Modal
        size="lg"
        style={{ width: "850px" }}
        isOpen={modal}
        toggle={modalAc}
      >
        <ModalHeader toggle={modalAc}>
          TEBRİKLER BETÜÜÜÜL! &#127817; &#127817; &#127817;
        </ModalHeader>
        <ModalBody className={"modalim"}>
          Görevi başarıyla tamamlayarak Sapanca'nın en güzel bungalow evlerinden
          birinde iki kişilik güzel bir tatil kazandın!! Muhteşem 2 gün seni
          bekliyor... Hediyeni almak için aşağıdaki butona tıklaman yeterli
          &#128053; &#128053; &#128053;
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => {
            window.open("https://wa.me/+905075346574?text=:))");
          }}>
            Hediyeni Al
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        size="lg"
        style={{ width: "850px" }}
        isOpen={modal2}
        toggle={modalAc}
      >
        <ModalHeader toggle={modalAc}>
          Beklediğimiz tarihten önce buradasın.. &#127817; &#127817; &#127817;
        </ModalHeader>
        <ModalBody className={"modalim2"}>
          Görevi başarıyla tamamlayıp tamamlamadığını ben şuan bilsem bile biraz daha seni heyecanlandırmak istiyorum.
          Just wait...
          &#128053; &#128053; &#128053;
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => {
            setModal2(!modal2);
          }}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>
      {loading && (
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <Loader type="Hearts" color="#00BFFF" height={200} width={500} />
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Heyecan dorukta...</span>{" "}
              <span className={`block text-primary xl:inline`}>
                Yüklediğin görsel yapay zekam tarafından denetleniyor...
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Just wait Betülcüm. &#128540; &#128540; &#128540;
            </p>
          </div>
        </main>
      )}
    </div>
  );
};

export default MainHero;
