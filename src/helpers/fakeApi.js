import { fakeProjects, fakeUsers, fakeActivities } from "@/helpers/fakeData.js";

function getFakeUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeUsers);
    }, 500);
  });
}

function getFakeProjects() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeProjects);
    }, 500);
  });
}

function getFakeActivities() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeActivities);
    }, 500);
  });
}

export { getFakeUsers, getFakeProjects, getFakeActivities };
