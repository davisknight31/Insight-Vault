import time
from bs4 import BeautifulSoup
from selenium import webdriver
import requests
from fake_useragent import UserAgent

def scrape_account(account_name):
    url = 'https://www.instagram.com/' + account_name
    url = 'https://www.instagram.com/p/C7wkhAux7wu/'
    options = webdriver.ChromeOptions()

    ua = UserAgent()
    user_agent = ua.random

    # headers = {'User-Agent': f"{user_agent}"}
    # response = requests.get(url, headers=headers)
    # html_content = response.text

    options.add_argument(f'--user-agent={user_agent}')
    # options.add_argument('--headless=new')
    
    driver = webdriver.Chrome(options=options)
    # driver.implicitly_wait(10);
    driver.get(url)
    time.sleep(15)

    page_source = driver.page_source

    with open('dump.html', 'w', encoding='utf-8') as f:
        f.write(str(page_source))






scrape_account("pelicannoiseworks")