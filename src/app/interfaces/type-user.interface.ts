export interface UserAlone {
  id: number;
  user: string;
  type_user: {
    type_user_id: number;
    type: string;
    active: boolean;
    description: string;
  };

}

// this.user = {
//     id: 14,
//     user: 'peter',
//     type_user: {
//       active: true,
//       description: "gerente de tienda",
//       type: "Gerente",
//       type_user_id: 2
//     }
//   };

export interface User {
    id:        number;
    user:      string;
    type_user: TypeUser;
}

export interface TypeUser {
    type_user_id: number;
    type:         string;
    active:       boolean;
    descripction: string;
}
