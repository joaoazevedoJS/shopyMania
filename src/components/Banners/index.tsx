import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { Banners as BannerModel } from '../../models/Banners';

import {
  BannerContainer,
  BannerContent,
  BannersDesktop,
  BannersMobile,
} from './styles';

import { BannerFunctionType } from './types/BannerFunctionType';

import axiosAPI from '../../services/axiosAPI';

const Banners: BannerFunctionType = ({
  slickSettings,
  bannersDesktopCollectionId,
  bannersMobileCollectionId,
}) => {
  const [bannersMobile, setBannersMobile] = useState<BannerModel[]>([]);
  const [bannersDesktop, setBannersDesktop] = useState<BannerModel[]>([]);

  useEffect(() => {
    axiosAPI
      .get(`/bannerCollection/${bannersDesktopCollectionId}`)
      .then(response => {
        const { data } = response;

        setBannersDesktop(data.banners);
      });

    axiosAPI
      .get(`/bannerCollection/${bannersMobileCollectionId}`)
      .then(response => {
        const { data } = response;

        setBannersMobile(data.banners);
      });
  }, [bannersDesktopCollectionId, bannersMobileCollectionId]);

  return (
    <BannerContainer>
      <BannersDesktop>
        <Slider {...slickSettings}>
          {bannersDesktop.map(banner => (
            <BannerContent key={banner.id}>
              <img
                src={banner.image_url}
                alt={banner.name}
                title={banner.name}
              />
            </BannerContent>
          ))}
        </Slider>
      </BannersDesktop>

      <BannersMobile>
        <Slider {...slickSettings}>
          {bannersMobile.map(banner => (
            <BannerContent key={banner.id}>
              <img
                src={banner.image_url}
                alt={banner.name}
                title={banner.name}
              />
            </BannerContent>
          ))}
        </Slider>
      </BannersMobile>
    </BannerContainer>
  );
};

export default Banners;
