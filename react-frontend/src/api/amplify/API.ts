/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  startDate: string,
  endDate: string,
  state?: string | null,
  budget: number,
  promoter?: Array< string | null > | null,
  projectLocationId: string,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  state?: string | null,
  budget?: number | null,
  promoter?: Array< string | null > | null,
  projectLocationId?: string | null,
};

export type DeleteProjectInput = {
  id?: string | null,
};

export type CreatePromoterInput = {
  id?: string | null,
  name: string,
  email: string,
  phoneNumber: string,
};

export type UpdatePromoterInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
};

export type DeletePromoterInput = {
  id?: string | null,
};

export type CreateLocationInput = {
  id?: string | null,
  name: string,
  city: string,
};

export type UpdateLocationInput = {
  id: string,
  name?: string | null,
  city?: string | null,
};

export type DeleteLocationInput = {
  id?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  startDate?: ModelStringFilterInput | null,
  endDate?: ModelStringFilterInput | null,
  state?: ModelStringFilterInput | null,
  budget?: ModelFloatFilterInput | null,
  promoter?: ModelStringFilterInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPromoterFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  phoneNumber?: ModelStringFilterInput | null,
  and?: Array< ModelPromoterFilterInput | null > | null,
  or?: Array< ModelPromoterFilterInput | null > | null,
  not?: ModelPromoterFilterInput | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  city?: ModelStringFilterInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
};

export type CreateProjectMutation = {
  createProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    startDate: string,
    endDate: string,
    state: string | null,
    budget: number,
    promoter: Array< string | null > | null,
    location:  {
      __typename: "Location",
      id: string,
      name: string,
      city: string,
    },
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
};

export type UpdateProjectMutation = {
  updateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    startDate: string,
    endDate: string,
    state: string | null,
    budget: number,
    promoter: Array< string | null > | null,
    location:  {
      __typename: "Location",
      id: string,
      name: string,
      city: string,
    },
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
};

export type DeleteProjectMutation = {
  deleteProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    startDate: string,
    endDate: string,
    state: string | null,
    budget: number,
    promoter: Array< string | null > | null,
    location:  {
      __typename: "Location",
      id: string,
      name: string,
      city: string,
    },
  } | null,
};

export type CreatePromoterMutationVariables = {
  input: CreatePromoterInput,
};

export type CreatePromoterMutation = {
  createPromoter:  {
    __typename: "Promoter",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
  } | null,
};

export type UpdatePromoterMutationVariables = {
  input: UpdatePromoterInput,
};

export type UpdatePromoterMutation = {
  updatePromoter:  {
    __typename: "Promoter",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
  } | null,
};

export type DeletePromoterMutationVariables = {
  input: DeletePromoterInput,
};

export type DeletePromoterMutation = {
  deletePromoter:  {
    __typename: "Promoter",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
};

export type CreateLocationMutation = {
  createLocation:  {
    __typename: "Location",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
};

export type UpdateLocationMutation = {
  updateLocation:  {
    __typename: "Location",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
};

export type DeleteLocationMutation = {
  deleteLocation:  {
    __typename: "Location",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    startDate: string,
    endDate: string,
    state: string | null,
    budget: number,
    promoter: Array< string | null > | null,
    location:  {
      __typename: "Location",
      id: string,
      name: string,
      city: string,
    },
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description: string | null,
      startDate: string,
      endDate: string,
      state: string | null,
      budget: number,
      promoter: Array< string | null > | null,
      location:  {
        __typename: "Location",
        id: string,
        name: string,
        city: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPromoterQueryVariables = {
  id: string,
};

export type GetPromoterQuery = {
  getPromoter:  {
    __typename: "Promoter",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
  } | null,
};

export type ListPromotersQueryVariables = {
  filter?: ModelPromoterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPromotersQuery = {
  listPromoters:  {
    __typename: "ModelPromoterConnection",
    items:  Array< {
      __typename: "Promoter",
      id: string,
      name: string,
      email: string,
      phoneNumber: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation:  {
    __typename: "Location",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      name: string,
      city: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    startDate: string,
    endDate: string,
    state: string | null,
    budget: number,
    promoter: Array< string | null > | null,
    location:  {
      __typename: "Location",
      id: string,
      name: string,
      city: string,
    },
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    startDate: string,
    endDate: string,
    state: string | null,
    budget: number,
    promoter: Array< string | null > | null,
    location:  {
      __typename: "Location",
      id: string,
      name: string,
      city: string,
    },
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string | null,
    startDate: string,
    endDate: string,
    state: string | null,
    budget: number,
    promoter: Array< string | null > | null,
    location:  {
      __typename: "Location",
      id: string,
      name: string,
      city: string,
    },
  } | null,
};

export type OnCreatePromoterSubscription = {
  onCreatePromoter:  {
    __typename: "Promoter",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
  } | null,
};

export type OnUpdatePromoterSubscription = {
  onUpdatePromoter:  {
    __typename: "Promoter",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
  } | null,
};

export type OnDeletePromoterSubscription = {
  onDeletePromoter:  {
    __typename: "Promoter",
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
  } | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation:  {
    __typename: "Location",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation:  {
    __typename: "Location",
    id: string,
    name: string,
    city: string,
  } | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation:  {
    __typename: "Location",
    id: string,
    name: string,
    city: string,
  } | null,
};
