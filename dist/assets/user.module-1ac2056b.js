import{s as a,v as l,m as o}from"./index-8ea796bf.js";import{a as r}from"./auth-header-ad4d04ca.js";const i="https://crm.web-hands.ru/api/v1";class n{getMe(){return a.get(i+"/user/",{headers:r()})}getPlaces(){return a.get(i+"/place/list/",{headers:r()})}getPlacesChild(e){return a.get(i+"/places/?code="+e,{headers:r()})}getPlacesSubChild(e,s){return a.get(i+"/place/fields/?place="+e+"&id="+s,{headers:r()})}addNewPlaceChild(e){return a.post(i+"/place/save/",e,{headers:r()})}getOptionData(e){return a.get(i+"/options/list/?prop="+e,{headers:r()})}}const c=new n,g=l("user",{state:()=>({places:[],regions:[],districts:[],vicinities:[],localities:[],highways:[],place:[],metro:[],metro_line:[],placesSubChild:[],optionData:[]}),actions:{async getPlacesList(){try{const t=await c.getPlaces();return this.places=t.data.data,t}catch(t){return Promise.reject(t)}},async getPlacesChild(t){try{const e=await c.getPlacesChild(t);return t==="regions"?this.regions=e.data.data:t==="districts"?this.districts=e.data.data:t==="vicinity"?this.vicinities=e.data.data:t==="localities"?this.localities=e.data.data:t==="highway"?this.highways=e.data.data:t==="place"?this.place=e.data.data:t==="metro"?this.metro=e.data.data:t==="metro_line"&&(this.metro_line=e.data.data),e}catch(e){return Promise.reject(e)}},async addNewPlaceChild(t){try{const e=await c.addNewPlaceChild(t);e.status===200?o.success("Успешно изменено"):(console.error("Error fetching data:",e.statusText),o.error("Ошибка"))}catch(e){console.error("Error fetching data:",e)}},async getPlacesSubChild(t,e){try{const s=await c.getPlacesSubChild(t,e);return this.placesSubChild=s.data.data,s}catch(s){return Promise.reject(s)}},async getOptionsData(t){try{const e=await c.getOptionData(t);return this.optionData=e.data.data,console.log("reeeee",this.optionData),e}catch(e){return Promise.reject(e)}}}});export{g as u};
