const BASE_URL = 'https://api.bgm.tv';

export async function searchAnimes(keyword = '') {
  // 转义空格和其他特殊字符
  const response = await fetch(`${BASE_URL}/search/subject/${keyword}`);
  return response.json();
}
