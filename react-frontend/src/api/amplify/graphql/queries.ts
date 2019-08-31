// tslint:disable
// this is an auto generated file. This will be overwritten

export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    name
    description
    startDate
    endDate
    state
    promoter {
      items {
        id
        name
        email
        phoneNumber
      }
      nextToken
    }
    location {
      id
      name
      city
    }
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      startDate
      endDate
      state
      promoter {
        nextToken
      }
      location {
        id
        name
        city
      }
    }
    nextToken
  }
}
`;
export const getPromoter = `query GetPromoter($id: ID!) {
  getPromoter(id: $id) {
    id
    name
    email
    phoneNumber
  }
}
`;
export const listPromoters = `query ListPromoters(
  $filter: ModelPromoterFilterInput
  $limit: Int
  $nextToken: String
) {
  listPromoters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      phoneNumber
    }
    nextToken
  }
}
`;
export const getLocation = `query GetLocation($id: ID!) {
  getLocation(id: $id) {
    id
    name
    city
  }
}
`;
export const listLocations = `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      city
    }
    nextToken
  }
}
`;
