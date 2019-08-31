// tslint:disable
// this is an auto generated file. This will be overwritten

export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
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
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
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
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
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
export const createPromoter = `mutation CreatePromoter($input: CreatePromoterInput!) {
  createPromoter(input: $input) {
    id
    name
    email
    phoneNumber
  }
}
`;
export const updatePromoter = `mutation UpdatePromoter($input: UpdatePromoterInput!) {
  updatePromoter(input: $input) {
    id
    name
    email
    phoneNumber
  }
}
`;
export const deletePromoter = `mutation DeletePromoter($input: DeletePromoterInput!) {
  deletePromoter(input: $input) {
    id
    name
    email
    phoneNumber
  }
}
`;
export const createLocation = `mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input) {
    id
    name
    city
  }
}
`;
export const updateLocation = `mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input) {
    id
    name
    city
  }
}
`;
export const deleteLocation = `mutation DeleteLocation($input: DeleteLocationInput!) {
  deleteLocation(input: $input) {
    id
    name
    city
  }
}
`;
