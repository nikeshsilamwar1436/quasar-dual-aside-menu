export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface columns {
  name: string,
  label: string,
  align: string,
  field: string,
  sortable: boolean,
}

export interface rows {
   name: string;
   calories: number;
   fat: number;
   carbs: number;
   protein: number;
   sodium: number;
   calcium: string;
   iron: string;
}
