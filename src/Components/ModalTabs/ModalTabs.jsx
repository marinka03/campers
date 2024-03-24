import FilterListCard from "../FilterListCard";
import Form from "../Form/Form";
import {
  TabWrapper,
  UsersReviewsList,
  UserInfoWrap,
  StyledAvatarCircle,
  TabContentWrap,
  DetailsTitle,
  DetailsList,
  DetailsItem,
} from "./ModalTabs.styled";
import RatingStars from "../Stars/Stars";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function BasicTabs({ item }) {
  return (
    <>
      <Tabs>
        <TabList className="tab-list">
          <Tab className="tab-item" selectedClassName="active-tab">
            Features
          </Tab>
          <Tab className="tab-item">Rewiews</Tab>
        </TabList>

        <TabPanel className="tab-panel" forceRender={true}>
          <TabWrapper>
            <TabContentWrap>
              <FilterListCard details={item.details}></FilterListCard>
              <DetailsTitle>Vehicle details</DetailsTitle>
              <DetailsList>
                <DetailsItem>
                  <p>Form</p>
                  <p>{item.form}</p>
                </DetailsItem>
                <DetailsItem>
                  <p>Length</p>
                  <p>{item.length}</p>
                </DetailsItem>
                <DetailsItem>
                  <p>Width</p>
                  <p>{item.width}</p>
                </DetailsItem>
                <DetailsItem>
                  <p>Height</p>
                  <p>{item.height}</p>
                </DetailsItem>
                <DetailsItem>
                  <p>Tank</p>
                  <p>{item.tank}</p>
                </DetailsItem>
                <DetailsItem>
                  <p>Consumption</p>
                  <p>{item.consumption}</p>
                </DetailsItem>
              </DetailsList>
            </TabContentWrap>
            <Form />
          </TabWrapper>
        </TabPanel>
        <TabPanel className="tab-panel">
          <TabWrapper>
            <TabContentWrap>
              <UsersReviewsList>
                {item.reviews.map((user, idx) => (
                  <li key={idx}>
                    <UserInfoWrap>
                      <StyledAvatarCircle>
                        <p>{user.reviewer_name.split("")[0]}</p>
                      </StyledAvatarCircle>
                      <div>
                        <p>{user.reviewer_name}</p>
                        <RatingStars
                          stars_count={5}
                          rating={user.reviewer_rating}
                          spacing={4}
                          classNames="tab-rating-stars"
                        />
                      </div>
                    </UserInfoWrap>
                    <p>{user.comment}</p>
                  </li>
                ))}
              </UsersReviewsList>
            </TabContentWrap>
            <Form />
          </TabWrapper>
        </TabPanel>
      </Tabs>
    </>
  );
}
